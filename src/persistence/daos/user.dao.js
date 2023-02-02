import { UserModel } from "../models/user.model.js";
import logger from "../../utils/loggers/Log4jsLogger.js";

import {
  transporter,
  options,
  sendMail,
} from "../../utils/notifications/emailSender.js";
// import { sendSMS, from, body } from "../utils/notifications/smsSender.js";

export async function createUser(object) {
  try {
    sendMail(transporter, options);
    // sendSMS(object.phone, from, body)
    return await UserModel.create(object);
  } catch (error) {
    logger.error(error);
    return null;
  }
}

export async function loginUser(object) {
  try {
    const user = await UserModel.findOne({
      username: object.username,
    });

    if (!user) {
      logger.info(`User '${object.username}' does not exist`);
      return null;
    }

    return await user.comparePassword(object.password);
  } catch (error) {
    logger.error(error);
    return null;
  }
}
