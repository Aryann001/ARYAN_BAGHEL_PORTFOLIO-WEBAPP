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
import { AiOutlineEye as OpenEye } from "react-icons/ai";
import { AiOutlineEyeInvisible as CloseEye } from "react-icons/ai";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import loginBg from "../../../assets/loginBg.jpg";
import { clearErrors, login } from "../../../actions/userAction";
import Loader from "../../Layout/Loader/Loader";

export default function SplitScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const [type, setType] = useState("password");
  const [eye, setEye] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const visible = () => {
    setEye(!eye);

    if (eye === true) {
      setType("text");
    } else {
      setType("password");
    }
  };

  const signInHandler = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (isAuthenticated) {
      navigate(`/console/profile`);
    }
    
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={4} w={"full"} maxW={"md"}>
              <Heading fontSize={"2xl"}>WELCOME BACK MASTER</Heading>
              <FormControl id="email">
                <FormLabel>Email Address</FormLabel>
                <div>
                  <Input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <div className="passwordBox">
                  <Input
                    type={type}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span onClick={visible}>
                    {type === "text" ? <OpenEye /> : <CloseEye />}
                  </span>
                </div>
              </FormControl>
              <Stack spacing={6}>
                <Button
                  onClick={signInHandler}
                  isDisabled={loading ? true : false}
                  backgroundColor={"#af0c0c"}
                  color={"white"}
                  transition={"all 0.5s"}
                  _hover={{ backgroundColor: "red.500" }}
                  variant={"solid"}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image alt={"Login Image"} objectFit={"cover"} src={loginBg} />
          </Flex>
        </Stack>
      )}
    </Fragment>
  );
}
