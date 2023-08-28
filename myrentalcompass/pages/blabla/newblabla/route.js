import React from "react";

export default async function GET(request) {
  const message = "THIS IS THE NEWBLABLA RESPONSE MESSAGE";
  return new Response(JSON.stringify(message));
}
