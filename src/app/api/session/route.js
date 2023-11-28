"use client"
import { useState, useEffect } from "react";
export function setSession(id, isLogged) {
    const setIdSession = id;
    const setIsLoggedSession = isLogged
    return [idSession, isLoggedSession];
}