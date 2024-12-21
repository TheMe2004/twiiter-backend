const User = require("../database/user.model")

const list = async () => {
    let list = await User.findAll({})
    return list
}
const create = async (params) => {
  let user = await User.create(params)
  return user
}

const userService = {
    create,
    list
}

module.exports = userService