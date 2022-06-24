import { client } from "../../lib/sanity";

const createUserOnSanity = async (req: any, res: any) => {
  try {
    const UserDoc = {
      _type: "users",
      _id: req.body.userWalletAddress,
      name: req.body.name,
      walletAddress: req.body.userWalletAddress,
    };
    await client.createIfNotExists(UserDoc);
    res.status(200).send({ message: "success" });
  } catch (error: any) {
    res.status(500).send({ message: "error", data: error.message });
  }
};

export default createUserOnSanity;
