const yup = require("yup");

const schemaProvider = {
  GET: {},
  POST: {
    "/": {
      schema: yup.object().shape({
        name: yup.string().min(2).max(20).required(),
        image: yup.string().min(7).required(),
        description: yup.string().min(2).required(),
        price: yup.number().required(),
      }),
    },
  },
};

const validProduct = () => {
  return async (req, res, next) => {
    try {
      const model = schemaProvider[req.method][req.url];
      await model.schema.validate(
        req.body,
        model.options || { abortEarly: false }
      );
      next();
    } catch (err) {
      res.send(err);
    }
  };
};

module.exports = validProduct;
