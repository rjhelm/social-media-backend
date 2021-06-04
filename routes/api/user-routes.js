const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/user-controller");

// Routes to all users and creating a user
router.route("/").get(getAllUsers).post(createUser);

// routes to user based on id, get one user, update, and delete
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// routes that pertain to friends
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;
