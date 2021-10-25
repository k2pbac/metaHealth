import React from "react";
import classNames from "classnames"

import "components/Button.scss";

export default function Button(props) {

   const buttonClass = classNames('button');


   return <button className = {buttonClass} onClick = {props.onClick}>{props.children}</button>;
}
