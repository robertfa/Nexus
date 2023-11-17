CREATE TABLE IF NOT EXISTS `nexusdb`.`ficha` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) NOT NULL,
  `caratula` varchar(200) NOT NULL,
  `descripcion` text(200) NOT NULL,
  `puntuacion` int(10) NOT NULL DEFAULT 0,
  `fechaestreno` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

