import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Carousel from "react-bootstrap/Carousel";

import "index.scss";

import Home from "components/Home/Home";
import Header from "components/Home/Header";

storiesOf("Home", module).add("Header", () => <Header></Header>);
