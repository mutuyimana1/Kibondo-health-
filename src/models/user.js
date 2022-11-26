const express = require("express");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    secondName: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "please enter a valid email",
      ],
    },
    password: {
      type: String,
      strong: true,
    },
    gender: {
      type: String,
      enum: ["female", "male", "not prefer to say"],
    },
    role: {
      type: String,
      enum: ["admin", "doctor", "hospital-admin"],
    },
    organization: String,
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);
const user = mongoose.model("User", UserSchema);

module.exports = user;
