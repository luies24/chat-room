# README

# Chat Room App

> Allows users to send messages using Google's Firebase site.

## Table of contents

- [General info](#general-info)
- [Technologies](#technologies)
- [Setup](#setup)
- [Features](#features)
- [Status](#status)
- [Contact](#contact)


## General info

Chat Room allows any user to sign in using their Google account and they can send messages to their friends without having any type of restrictions.

## Technologies

- Firebase - Version 8.1.2
- React.js - Version 17.0.1
- CSS - Version 3 

## Setup

To run this project, install it locally by cloning the GitHub repository and 
typing the following command in your terminal:

$ npm start

## Code Examples

React.js 

```
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received'


  return (
    <div className={`message ${messageClass}`} >
      <img src={photoURL} />
      <p>{text}</p>
    </div >
  )
}

```

## Features

-Lets users sign in with Google.
-Users can chat with as many friends as they want.
-Free to talk about anything without restrictions.

## Status

Project is: finished with option to expand functionality and DRY out code.


## Contact

Created by [Luis Garcia](https://www.linkedin.com/in/garciale308/)
Feel free to contact us to talk music or talk code!!! 