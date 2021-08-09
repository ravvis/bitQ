import {getData} from "./utils";

export async function getRepositories(token : string){
  const { data : repositories, error } = await getData(token, "repositories");
  return [
    repositories,
    error
  ]
}

export async function getWorkspaces(token : string){
  const { data : workspaces, error } = await getData(token, "workspaces");
  return [
    workspaces,
    error
  ]
}