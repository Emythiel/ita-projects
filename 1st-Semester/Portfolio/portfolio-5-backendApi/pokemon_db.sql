-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema ita1_pokemon
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ita1_pokemon
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ita1_pokemon` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ita1_pokemon` ;

-- -----------------------------------------------------
-- Table `ita1_pokemon`.`towns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ita1_pokemon`.`towns` (
  `town_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`town_id`),
  UNIQUE INDEX `region_id_UNIQUE` (`town_id` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ita1_pokemon`.`trainers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ita1_pokemon`.`trainers` (
  `trainer_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `gym_id` INT NULL DEFAULT NULL,
  `home_town` INT NULL DEFAULT NULL,
  PRIMARY KEY (`trainer_id`),
  UNIQUE INDEX `trainer_id_UNIQUE` (`trainer_id` ASC) VISIBLE,
  INDEX `gym_id_idx` (`gym_id` ASC) VISIBLE,
  INDEX `town_id_idx` (`home_town` ASC) VISIBLE,
  CONSTRAINT `gym`
    FOREIGN KEY (`gym_id`)
    REFERENCES `ita1_pokemon`.`gyms` (`gym_id`),
  CONSTRAINT `home_town`
    FOREIGN KEY (`home_town`)
    REFERENCES `ita1_pokemon`.`towns` (`town_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 15
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ita1_pokemon`.`gyms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ita1_pokemon`.`gyms` (
  `gym_id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `leader` INT NULL DEFAULT NULL,
  `town` INT NOT NULL,
  `pokemon_type` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`gym_id`),
  INDEX `trainer_id_idx` (`leader` ASC) VISIBLE,
  INDEX `region_idx` (`town` ASC) VISIBLE,
  CONSTRAINT `leader`
    FOREIGN KEY (`leader`)
    REFERENCES `ita1_pokemon`.`trainers` (`trainer_id`),
  CONSTRAINT `town`
    FOREIGN KEY (`town`)
    REFERENCES `ita1_pokemon`.`towns` (`town_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 9
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ita1_pokemon`.`pokemon`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ita1_pokemon`.`pokemon` (
  `pokedex_number` INT NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `speed` INT NULL DEFAULT NULL,
  `special_defence` INT NULL DEFAULT NULL,
  `special_attack` INT NULL DEFAULT NULL,
  `defence` INT NULL DEFAULT NULL,
  `attack` INT NULL DEFAULT NULL,
  `hp` INT NULL DEFAULT NULL,
  `primary_type` VARCHAR(45) NULL DEFAULT NULL,
  `secondary_type` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`pokedex_number`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ita1_pokemon`.`teams`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ita1_pokemon`.`teams` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `trainer_id` INT NOT NULL,
  `pokedex_number` INT NOT NULL,
  `level` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `pokedex_number_idx` (`pokedex_number` ASC) VISIBLE,
  INDEX `trainer_idx` (`trainer_id` ASC) VISIBLE,
  CONSTRAINT `pokedex_number`
    FOREIGN KEY (`pokedex_number`)
    REFERENCES `ita1_pokemon`.`pokemon` (`pokedex_number`),
  CONSTRAINT `trainer`
    FOREIGN KEY (`trainer_id`)
    REFERENCES `ita1_pokemon`.`trainers` (`trainer_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 48
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
