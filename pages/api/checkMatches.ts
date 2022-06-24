import { client } from "../../lib/sanity";

const getUserInfo = async (req: any, res: any) => {
  try {
    const query = `
      *[_type == "users" && _id == "${req.body.likedUser}"]{
         likes
        }
    `;

    const sanityResponse = await client.fetch(query);

    let isMatch = false;

    sanityResponse[0].likes.forEach((likedUser: { _ref: boolean }) => {
      if (likedUser._ref === req.body.currentUser) {
        isMatch = true;
      }
    });

    res.status(200).send({ message: "success", data: { isMatch: isMatch } });
  } catch (error: any) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default getUserInfo;
