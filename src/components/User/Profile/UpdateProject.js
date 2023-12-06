import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  Button,
  Input,
  Image,
} from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { clearErrors, updateProject } from "../../../actions/userAction";

export default function UpdateProject() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { uProjectId } = useParams();

  const { updateProjectLoading, error, isProjectUpdated, user } = useSelector(
    (state) => state.user
  );

  const [banner, setBanner] = useState();
  const [bannerPreview, setBannerPreview] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [stack, setStack] = useState([]);
  const [stackStr, setStackStr] = useState("");
  const [github, setGithub] = useState("");
  const [projectLink, setProjectLink] = useState("");
  const [date, setDate] = useState("");

  const imageDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setBannerPreview(reader.result);
        setBanner(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const bannerSubmitHandler = (e) => {
    e.preventDefault();

    const bannerData = new FormData();

    const stackStr = JSON.stringify(stack);

    bannerData.set(`title`, title);
    bannerData.set(`description`, description);
    bannerData.set(`github`, github);
    bannerData.set(`projectLink`, projectLink);
    bannerData.set(`stack`, stackStr);
    bannerData.set(`date`, date);

    if (banner !== undefined) {
      bannerData.append(`image`, banner);
    }

    dispatch(updateProject(bannerData, uProjectId));
  };

  let arr = [];

  const stackHandler = (e) => {
    e.preventDefault();

    if (stackStr !== "") {
      arr.push(stackStr);
      setStackStr("");

      if (arr[0] !== "") {
        setStack((old) => [...old, arr[0]]);
      }
    }
  };

  const removeFromStackHandler = (i) => {
    const array = stack.filter((s, index) => index !== i);

    setStack(array);
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isProjectUpdated) {
      navigate(`/console/projects`);
      toast.success(`Project Created Successfully`);
      dispatch({ type: "UPDATE_PROJECT_RESET" });
    }

    if (user && user.projects.length !== 0) {
      const project = user.projects.find(
        (project) => project._id.toString() === uProjectId.toString()
      );

      setTitle(project.title);
      setDescription(project.description);
      setStack(project.stack);
      setGithub(project.github);
      setProjectLink(project.projectLink);
      setBannerPreview(project.image.url);
      setDate(project.date);
    }
  }, [dispatch, navigate, error, isProjectUpdated, user, uProjectId]);

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
            className="contactContainer bannerContainer createProduct"
            style={
              window.innerWidth <= Number(600) ? { height: "170vh" } : null
            }
          >
            <h1>Update Project</h1>
            <form
              encType="multipart/form-data"
              className="contactForm"
              onSubmit={bannerSubmitHandler}
            >
              <div>
                <Input
                  type="text"
                  name="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  color={useColorModeValue("gray.800", "gray.200")}
                  bg={useColorModeValue("gray.100", "gray.600")}
                  border={0}
                  _focus={{
                    bg: useColorModeValue("gray.200", "gray.800"),
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="descriptions"
                  placeholder="Descriptions"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  color={useColorModeValue("gray.800", "gray.200")}
                  bg={useColorModeValue("gray.100", "gray.600")}
                  border={0}
                  _focus={{
                    bg: useColorModeValue("gray.200", "gray.800"),
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="github"
                  placeholder="Github Link"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  required
                  color={useColorModeValue("gray.800", "gray.200")}
                  bg={useColorModeValue("gray.100", "gray.600")}
                  border={0}
                  _focus={{
                    bg: useColorModeValue("gray.200", "gray.800"),
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="projectLink"
                  placeholder="Project Link"
                  value={projectLink}
                  onChange={(e) => setProjectLink(e.target.value)}
                  required
                  color={useColorModeValue("gray.800", "gray.200")}
                  bg={useColorModeValue("gray.100", "gray.600")}
                  border={0}
                  _focus={{
                    bg: useColorModeValue("gray.200", "gray.800"),
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  color={useColorModeValue("gray.800", "gray.200")}
                  bg={useColorModeValue("gray.100", "gray.600")}
                  border={0}
                  _focus={{
                    bg: useColorModeValue("gray.200", "gray.800"),
                    outline: "none",
                  }}
                />
              </div>
              <div className="stack">
                <div>
                  <Input
                    type="text"
                    name="stack"
                    placeholder="Stack"
                    value={stackStr}
                    onChange={(e) => {
                      setStackStr(e.target.value);
                    }}
                    color={useColorModeValue("gray.800", "gray.200")}
                    bg={useColorModeValue("gray.100", "gray.600")}
                    border={0}
                    _focus={{
                      bg: useColorModeValue("gray.200", "gray.800"),
                      outline: "none",
                    }}
                  />
                  <Button
                    colorScheme="red"
                    bg="#af0c0c"
                    color="white"
                    _hover={{
                      bg: "red.500",
                    }}
                    width="full"
                    id="createProductBtn"
                    onClick={stackHandler}
                    padding={
                      window.innerWidth <= Number(600) ? "2vmax 0" : "1vmax 0"
                    }
                  >
                    Add
                  </Button>
                </div>
                <div>
                  {stack.length !== 0 &&
                    stack.map((s, index) => (
                      <p
                        onClick={() => removeFromStackHandler(index)}
                        key={index}
                      >
                        {s}
                      </p>
                    ))}
                </div>
              </div>

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
                  Choose Project Image
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  name="banner"
                  onChange={imageDataChange}
                  id="inputFile"
                  // visibility={"hidden"}
                />
              </div>

              <Button
                isDisabled={updateProjectLoading ? true : false}
                colorScheme="red"
                bg="#af0c0c"
                color="white"
                _hover={{
                  bg: "red.500",
                }}
                width="full"
                id="createProductBtn"
                type="submit"
                padding={
                  window.innerWidth <= Number(600) ? "2vmax 0" : "1vmax 0"
                }
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
                {bannerPreview && (
                  <Image
                    alt={"Image"}
                    objectFit={"cover"}
                    src={bannerPreview}
                  />
                )}
              </Flex>
            </div>
          </div>
        </div>
      </Box>
    </Fragment>
  );
}
