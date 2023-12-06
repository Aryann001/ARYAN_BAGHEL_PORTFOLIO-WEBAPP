import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loginBg from "../../../assets/loginBg.jpg";
import { clearErrors, updateAboutMe } from "../../../actions/userAction";

export default function SplitScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { updateAmLoading, isUpdatedAm, error, user } = useSelector(
    (state) => state.user
  );

  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const signInHandler = (e) => {
    e.preventDefault();

    dispatch(updateAboutMe(heading, description));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isUpdatedAm) {
      navigate(`/console/profile`);
      toast.success(`About ME Updated Successfully`);
      dispatch({ type: "UPDATE_ABOUT_ME_RESET" });
    }

    if (user) {
      setHeading(user.aboutMe.heading);
      setDescription(user.aboutMe.description);
    }
  }, [dispatch, error, isUpdatedAm, navigate, user]);

  return (
    <Fragment>
      <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
        <Flex p={8} flex={1} align={"center"} justify={"center"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"}>ABOUT ME</Heading>
            <FormControl id="heading">
              <FormLabel>Heading</FormLabel>
              <div>
                <Input
                  value={heading}
                  type="text"
                  onChange={(e) => setHeading(e.target.value)}
                />
              </div>
            </FormControl>
            <FormControl id="decription">
              <FormLabel>Description</FormLabel>
              <div className="passwordBox">
                <Input
                  value={description}
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </FormControl>
            <Stack spacing={6}>
              <Button
                onClick={signInHandler}
                isDisabled={updateAmLoading ? true : false}
                backgroundColor={"#af0c0c"}
                color={"white"}
                transition={"all 0.5s"}
                _hover={{ backgroundColor: "red.500" }}
                variant={"solid"}
              >
                Update
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image alt={"Login Image"} objectFit={"cover"} src={loginBg} />
        </Flex>
      </Stack>
    </Fragment>
  );
}
