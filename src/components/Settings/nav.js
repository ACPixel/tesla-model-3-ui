import React from "react";
import { NavLink } from "react-router-dom";

export default () => {
  return (
    <div
      style={{
        margin: 25,
        width: 250,
        display: "inline-block"
      }}
    >
      <NavLink
        to="/settings/quickControls"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Quick Controls
      </NavLink>
      <NavLink
        to="/settings/lights"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Lights
      </NavLink>
      <NavLink
        to="/settings/locks"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Locks
      </NavLink>
      <NavLink
        to="/settings/display"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Display
      </NavLink>
      <NavLink
        to="/settings/driving"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Driving
      </NavLink>
      <NavLink
        to="/settings/autopilot"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Autopilot
      </NavLink>
      <NavLink
        to="/settings/navigation"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Navigation
      </NavLink>
      <NavLink
        to="/settings/safetyandsecurity"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Safety & Security
      </NavLink>
      <NavLink
        to="/settings/service"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Service
      </NavLink>
      <NavLink
        to="/settings/software"
        style={{
          fontSize: 24,
          color: "#aaa",
          display: "block",
          marginBottom: 35,
          textDecoration: "none",
          fontWeight: "bold"
        }}
        activeStyle={{ color: "#666" }}
      >
        Software
      </NavLink>
    </div>
  );
};
