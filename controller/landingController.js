const Member = require("../models/member");

exports.land =
  ("/",
  (req, res) => {
    res.render("index");
    logger.info("landed index");
  });
exports.addMember =
  ("/",
  async (req, res) => {
    member = new Member(req.body);
    try {
      await member.save();
      console.log(req.body);
      res.status(201).send(member);
      // res.render("addMember", { success: " Suucessfully added" });
    } catch (e) {
      logger.error("error  add ", e);
      res.status(501).send(e);
    }
  });

exports.listMember =
  ("/",
  async (req, res) => {
    try {
      member = await Member.find({});
      console.log(member);
      res.render("index", { member: member });
    } catch (e) {
      res.status(201).send(e);
    }
  });
