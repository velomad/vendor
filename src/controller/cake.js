const models = require("../models");
const generateAndSendEmail = require('../utils/mail');
module.exports = {
    addCake: async (req, res, next) => {
        const body = req.body
        const { aud } = req.payload;

        try {
            const result = await models.VendorCake.create({ vendorId: aud, ...body })
            res.status(201).json({
                status: "success",
                result
            })
        } catch (error) {
            console.log(error);
            next(error)

        }

    },

    viewCakes: async (req, res, next) => {
        const { aud } = req.payload;
        try {
            const result = await models.VendorCake.findAll({ where: { vendorId: aud } });
            generateAndSendEmail.sendEmail();
            res.status(200).json({
                status: "success",
                cakes: result
            })

        } catch (error) {
            next(error)
        }
    }
}
