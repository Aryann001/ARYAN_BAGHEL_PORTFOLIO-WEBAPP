import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import "./UpdateStack.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { clearErrors, updateStack } from "../../../actions/userAction";

export default function BannerUpdate() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { updateStackLoading, error, isStackUpdated, user } = useSelector(
    (state) => state.user
  );

  const [banner, setBanner] = useState([]);
  const [bannerPreview, setBannerPreview] = useState([]);

  const imageDataChange = (e) => {
    const files = Array.from(e.target.files);

    setBanner([]);
    setBannerPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setBannerPreview((old) => [...old, reader.result]);
          setBanner((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const bannerSubmitHandler = (e) => {
    e.preventDefault();

    const bannerData = new FormData();

    banner.forEach((image) => {
      bannerData.append(`stack`, image);
    });

    dispatch(updateStack(bannerData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (user.techStack.length !== 0) {
      let bimgArr = [];

      for (let i = 0; i < user.techStack.length; i++) {
        bimgArr.push(user.techStack[i].url);
      }

      setBannerPreview(bimgArr);
    }

    if (isStackUpdated) {
      navigate(`/console/profile`);
      toast.success(`Stack Updated Successfully`);
      dispatch({ type: "UPDATE_STACK_RESET" });
    }
  }, [dispatch, navigate, error, user, isStackUpdated]);

  return (
    <Fragment>
      <Box
        minH="100vh"
        display={"flex"}
        flexDirection={window.innerWidth <= Number(767) ? "column" : "row"}
        bg={useColorModeValue("gray.100", "gray.900")}
      >
        <div className="banner">
          <div
            className="contactContainer bannerContainer"
            style={window.innerWidth <= Number(600) ? { height: "70vh" } : null}
          >
            <h1>Update Stack</h1>
            <form
              encType="multipart/form-data"
              className="contactForm"
              onSubmit={bannerSubmitHandler}
            >
              <div className="inputFileBtn">
                <label
                  htmlFor="inputFile"
                  className="inputFile"
                  style={
                    window.innerWidth <= Number(600)
                      ? { fontSize: "2.2vmax" }
                      : null
                  }
                >
                  Choose Stack Images
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  name="banner"
                  onChange={imageDataChange}
                  id="inputFile"
                  visibility={"hidden"}
                />
              </div>

              <Button
                isDisabled={updateStackLoading ? true : false}
                colorScheme="red"
                bg="#af0c0c"
                color="white"
                _hover={{
                  bg: "red.500",
                }}
                width="full"
                id="createProductBtn"
                type="submit"
                padding={window.innerWidth <= Number(600) ? "2vmax 0" : null}
              >
                Update
              </Button>
            </form>
            <div className="preview">
              <Flex
                height={"60%"}
                width={"90%"}
                display={"flex"}
                overflow={"auto"}
              >
                {bannerPreview &&
                  bannerPreview.map((image, index) => (
                    <Image
                      key={index}
                      alt={"Banner Preview Image"}
                      objectFit={"cover"}
                      src={image}
                    />
                  ))}
              </Flex>
            </div>
          </div>
        </div>
      </Box>
    </Fragment>
  );
}
