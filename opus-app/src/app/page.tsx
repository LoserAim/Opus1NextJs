"use client"

import UseAxios from "../_hooks/UseAxios";
import {UserModel} from "@/_models/user-model";

export default function Home() {
  const {data, loading, error} = UseAxios<UserModel[]>("/users","get")

  return (
      <>
        <h1>testing{!loading && JSON.stringify(data)}</h1>
        <h2>testing{!loading && JSON.stringify(error)}</h2>
      </>
  );
}
