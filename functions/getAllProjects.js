import { gql } from "graphql-request";
import { graphcms } from "../client";

export const getAllProjects = async () => {
    const getAllProjectsQuery = gql`
    {
        projects {
            id
            title
            tags
            image {
              url
            }
            source
            description
          }
        }
  `;

    const { projects } = await graphcms.request(getAllProjectsQuery);

    return projects;
};