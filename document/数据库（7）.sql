-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`body`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`body` (
  `userId` INT NULL,
  `time` DATETIME NULL,
  `bodyId` INT NOT NULL AUTO_INCREMENT,
  `bodyClass` VARCHAR(50) NULL,
  `userHeight` DOUBLE NULL,
  `userWeight` DOUBLE NULL,
  PRIMARY KEY (`bodyId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `userId` INT NOT NULL AUTO_INCREMENT,
  `headPic` VARCHAR(45) NULL,
  `userName` VARCHAR(45) NULL,
  `userPwd` VARCHAR(45) NULL,
  `telephone` VARCHAR(45) NULL,
  `autograph` VARCHAR(100) NULL,
  `sex` CHAR(10) NULL,
  `birthday` DATETIME NULL,
  `registerTime` DATETIME NULL,
  `isExpert` CHAR NULL,
  PRIMARY KEY (`userId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`artical`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`artical` (
  `articalid` INT NOT NULL AUTO_INCREMENT,
  `articallabel` VARCHAR(45) NULL,
  `coverPic` VARCHAR(45) NULL,
  `content` TEXT NULL,
  `contentPic1` VARCHAR(45) NULL,
  `contentPic2` VARCHAR(45) NULL,
  `contentPic3` VARCHAR(45) NULL,
  `contentPic4` VARCHAR(45) NULL,
  `contentPic5` VARCHAR(45) NULL,
  `status` VARCHAR(10) NULL,
  `userId` INT NULL,
  `pageViews` INT NULL,
  `title` VARCHAR(1000) NULL,
  `articalClassification` VARCHAR(45) NULL,
  PRIMARY KEY (`articalid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`attentions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`attentions` (
  `userId` INT NOT NULL,
  `attentionedUserId` INT NULL,
  `time` DATETIME NULL,
  `attentionsId` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`attentionsId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`collections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`collections` (
  `userId` INT NULL,
  `articalId` INT NULL,
  `time` DATETIME NULL,
  `collectionsId` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`collectionsId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`suggestions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`suggestions` (
  `userId` INT NOT NULL,
  `bigSuggestionsId` INT NULL,
  `time` DATETIME NULL,
  `suggestionsId` INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`suggestionsId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`Bigsuggestions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Bigsuggestions` (
  `bigsuggestionsid` INT NOT NULL AUTO_INCREMENT,
  `sugcontent` TEXT NULL,
  `bodyclass` CHAR(50) NULL,
  PRIMARY KEY (`bigsuggestionsid`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comments` (
  `commentsId` INT NOT NULL AUTO_INCREMENT,
  `postId` INT NULL,
  `userId` INT NULL,
  `comContent` TEXT NULL,
  `time` DATETIME NULL,
  PRIMARY KEY (`commentsId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`userlike`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`userlike` (
  `likeId` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL,
  `time` DATETIME NULL,
  PRIMARY KEY (`likeId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`administrators`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`administrators` (
  `adminId` INT NOT NULL AUTO_INCREMENT,
  `userName` VARCHAR(45) NULL,
  `admPwd` INT NULL,
  PRIMARY KEY (`adminId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`post`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`post` (
  `postId` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NULL,
  `title` VARCHAR(100) NULL,
  `postLabel` VARCHAR(10) NULL,
  `time` DATETIME NULL,
  `pageViews` INT NULL,
  `postContent` TEXT NULL,
  `postPic1` VARCHAR(100) NULL,
  `postPic2` VARCHAR(100) NULL,
  `postPic3` VARCHAR(100) NULL,
  `postClassification` VARCHAR(45) NULL,
  PRIMARY KEY (`postId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users_has_attentions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users_has_attentions` (
  `users_userid` INT NOT NULL,
  `attentions_attentionsid` INT NOT NULL,
  PRIMARY KEY (`users_userid`, `attentions_attentionsid`),
  INDEX `fk_users_has_attentions_attentions1_idx` (`attentions_attentionsid` ASC) VISIBLE,
  INDEX `fk_users_has_attentions_users1_idx` (`users_userid` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_attentions_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_attentions_attentions1`
    FOREIGN KEY (`attentions_attentionsid`)
    REFERENCES `mydb`.`attentions` (`attentionsId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users_has_collections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users_has_collections` (
  `users_userid` INT NOT NULL,
  `collections_collectionsid` INT NOT NULL,
  PRIMARY KEY (`users_userid`, `collections_collectionsid`),
  INDEX `fk_users_has_collections_collections1_idx` (`collections_collectionsid` ASC) VISIBLE,
  INDEX `fk_users_has_collections_users1_idx` (`users_userid` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_collections_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_collections_collections1`
    FOREIGN KEY (`collections_collectionsid`)
    REFERENCES `mydb`.`collections` (`collectionsId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`users_has_suggestions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users_has_suggestions` (
  `users_userid` INT NOT NULL,
  `suggestions_suggestionsid` INT NOT NULL,
  PRIMARY KEY (`users_userid`, `suggestions_suggestionsid`),
  INDEX `fk_users_has_suggestions_suggestions1_idx` (`suggestions_suggestionsid` ASC) VISIBLE,
  INDEX `fk_users_has_suggestions_users1_idx` (`users_userid` ASC) VISIBLE,
  CONSTRAINT `fk_users_has_suggestions_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_users_has_suggestions_suggestions1`
    FOREIGN KEY (`suggestions_suggestionsid`)
    REFERENCES `mydb`.`suggestions` (`suggestionsId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`suggestions_has_Bigsuggestions`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`suggestions_has_Bigsuggestions` (
  `suggestions_suggestionsid` INT NOT NULL,
  `Bigsuggestions_suggestionsid` INT NOT NULL,
  PRIMARY KEY (`suggestions_suggestionsid`, `Bigsuggestions_suggestionsid`),
  INDEX `fk_suggestions_has_Bigsuggestions_Bigsuggestions1_idx` (`Bigsuggestions_suggestionsid` ASC) VISIBLE,
  INDEX `fk_suggestions_has_Bigsuggestions_suggestions1_idx` (`suggestions_suggestionsid` ASC) VISIBLE,
  CONSTRAINT `fk_suggestions_has_Bigsuggestions_suggestions1`
    FOREIGN KEY (`suggestions_suggestionsid`)
    REFERENCES `mydb`.`suggestions` (`suggestionsId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_suggestions_has_Bigsuggestions_Bigsuggestions1`
    FOREIGN KEY (`Bigsuggestions_suggestionsid`)
    REFERENCES `mydb`.`Bigsuggestions` (`bigsuggestionsid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`artical_has_collections`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`artical_has_collections` (
  `artical_articalid` INT NOT NULL,
  `collections_collectionsid` INT NOT NULL,
  PRIMARY KEY (`artical_articalid`, `collections_collectionsid`),
  INDEX `fk_artical_has_collections_collections1_idx` (`collections_collectionsid` ASC) VISIBLE,
  INDEX `fk_artical_has_collections_artical1_idx` (`artical_articalid` ASC) VISIBLE,
  CONSTRAINT `fk_artical_has_collections_artical1`
    FOREIGN KEY (`artical_articalid`)
    REFERENCES `mydb`.`artical` (`articalid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_artical_has_collections_collections1`
    FOREIGN KEY (`collections_collectionsid`)
    REFERENCES `mydb`.`collections` (`collectionsId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`comments_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`comments_has_users` (
  `comments_commentsid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`comments_commentsid`, `users_userid`),
  INDEX `fk_comments_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_comments_has_users_comments1_idx` (`comments_commentsid` ASC) VISIBLE,
  CONSTRAINT `fk_comments_has_users_comments1`
    FOREIGN KEY (`comments_commentsid`)
    REFERENCES `mydb`.`comments` (`commentsId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comments_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`like_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`like_has_users` (
  `like_postid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`like_postid`, `users_userid`),
  INDEX `fk_like_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_like_has_users_like1_idx` (`like_postid` ASC) VISIBLE,
  CONSTRAINT `fk_like_has_users_like1`
    FOREIGN KEY (`like_postid`)
    REFERENCES `mydb`.`userlike` (`likeId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_like_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`post_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`post_has_users` (
  `post_postid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`post_postid`, `users_userid`),
  INDEX `fk_post_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_post_has_users_post1_idx` (`post_postid` ASC) VISIBLE,
  CONSTRAINT `fk_post_has_users_post1`
    FOREIGN KEY (`post_postid`)
    REFERENCES `mydb`.`post` (`postId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_post_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`administrators_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`administrators_has_users` (
  `administrators_adminid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`administrators_adminid`, `users_userid`),
  INDEX `fk_administrators_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_administrators_has_users_administrators1_idx` (`administrators_adminid` ASC) VISIBLE,
  CONSTRAINT `fk_administrators_has_users_administrators1`
    FOREIGN KEY (`administrators_adminid`)
    REFERENCES `mydb`.`administrators` (`adminId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_administrators_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`administrators_has_artical`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`administrators_has_artical` (
  `administrators_adminid` INT NOT NULL,
  `artical_articalid` INT NOT NULL,
  PRIMARY KEY (`administrators_adminid`, `artical_articalid`),
  INDEX `fk_administrators_has_artical_artical1_idx` (`artical_articalid` ASC) VISIBLE,
  INDEX `fk_administrators_has_artical_administrators1_idx` (`administrators_adminid` ASC) VISIBLE,
  CONSTRAINT `fk_administrators_has_artical_administrators1`
    FOREIGN KEY (`administrators_adminid`)
    REFERENCES `mydb`.`administrators` (`adminId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_administrators_has_artical_artical1`
    FOREIGN KEY (`artical_articalid`)
    REFERENCES `mydb`.`artical` (`articalid`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`body_has_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`body_has_users` (
  `body_bodyid` INT NOT NULL,
  `users_userid` INT NOT NULL,
  PRIMARY KEY (`body_bodyid`, `users_userid`),
  INDEX `fk_body_has_users_users1_idx` (`users_userid` ASC) VISIBLE,
  INDEX `fk_body_has_users_body1_idx` (`body_bodyid` ASC) VISIBLE,
  CONSTRAINT `fk_body_has_users_body1`
    FOREIGN KEY (`body_bodyid`)
    REFERENCES `mydb`.`body` (`bodyId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_body_has_users_users1`
    FOREIGN KEY (`users_userid`)
    REFERENCES `mydb`.`users` (`userId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
