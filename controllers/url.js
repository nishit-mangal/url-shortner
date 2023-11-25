import { nanoid } from "nanoid";
import URL from "../models/url.js";

export async function generateShortUrl(req, resp) {
  //TODO: Make a link generation unique for a user
  const orignalUrl = req.body?.originalUrl;
  if (!orignalUrl) {
    return resp.status(400).json({ message: "No URL found" });
  }
  const shortId = nanoid(8);
  await URL.create({
    shortLink: shortId,
    originalLink: orignalUrl,
    visitHistory: [],
    createdBy: req.user
  });
  return resp.render('home',{
    id:shortId
  })
}

export async function getRedirectUrl(req, res) {
  console.log("req", req.params);
  try {
    const urlObj = await URL.findOneAndUpdate(
      { shortLink: req.params?.id },
      {
        $push: { visitHistory: { timestamp: Date.now() } },
      }
    );
    console.log("Updated Document: ", urlObj);
    res.redirect(urlObj.originalLink);
  } catch (err) {
    console.log("Error Updating Doucment: ", err);
    res.status(500).send("Internal Server Error");
  }
}

export async function getAnalytics(req, resp) {
  const urlObj = await URL.findOne({
    shortLink: req.params?.id,
  });
  console.log("Fetched Obj:", urlObj);
  const returnObj = {
    clickNumber:(urlObj?.visitHistory).length,
    analytics: (urlObj?.visitHistory)
  }
  resp.status(200).json(returnObj);
}

export async function getAllUrls(){
  const urlObj = await URL.find({})
  return urlObj
}

export async function urlByUserId(id){
  const urlObj = await URL.find({createdBy:id})
  return urlObj
}