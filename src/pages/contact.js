import { Link } from "gatsby"
import React from "react"
import Header from "../components/header"

export default function Contact() {
  return (
    <div>
      <Link to="/">HOME</Link>
      <Header headerText="Gatsby Contact Page!" />
    </div>
  )
}
