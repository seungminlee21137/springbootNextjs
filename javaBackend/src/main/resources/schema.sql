CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(20) NOT NULL,
  email VARCHAR(50) NOT NULL,
  password VARCHAR(120) NOT NULL
);

CREATE TABLE IF NOT EXISTS roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(20) NOT NULL
);


/* for mysql*/
CREATE TABLE IF NOT EXISTS user_roles (
  user_id BIGINT NOT NULL,
  role_id BIGINT NOT NULL,
  PRIMARY KEY (user_id, role_id),
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (role_id) REFERENCES roles (id)
);


/** for mariaDB */
CREATE TABLE `user_roles` (
                              `user_id` BIGINT(20) UNSIGNED NOT NULL,
                              `role_id` BIGINT(20) UNSIGNED NOT NULL,
                              INDEX `index` (`user_id`, `role_id`) USING BTREE,
                              INDEX `FK_user_roles_roles` (`role_id`) USING BTREE,
                              CONSTRAINT `FK_user_roles_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION,
                              CONSTRAINT `FK_user_roles_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON UPDATE NO ACTION ON DELETE NO ACTION
)
    COMMENT='role_id'
COLLATE='utf8mb4_general_ci'
ENGINE=InnoDB
;
