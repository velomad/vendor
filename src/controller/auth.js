const models = require("../models");
const { signAccessToken } = require("../middlewares/jwt");
const { generatePassword } = require("../utils/commonFunctions");

module.exports = {
  login: async (req, res, next) => {
    res.status(200).json({
      message: await signAccessToken("1", process.env.USER_ACCESS_TOKEN_SECRET)
    })
  },


  signup: async (req, res, next) => {
    const body = req.body;
    let image, response;

    try {
      const found = await models.User.findOne({
        where: {
          [Op.or]: [
            {
              userName: body.userName,
            },
            {
              emailId: body.emailId,
            },
          ],
        },
      });

      if (found)
        throw createError.Conflict("Email Or Username Already Exist !");

      if (req.file) {
        image = req.file.path;
        response = await upload(image);
      }

      const result = await models.User.create({
        ...body,
        profileImageUrl: image ? response.url : null,
      });

      res.status(201).json({ status: "success", result, found });
    } catch (error) {
      next(error);
      // console.log(error);
    }
  },

}