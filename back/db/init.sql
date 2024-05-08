CREATE TABLE IF NOT EXISTS `mediaEntry` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `cover` varchar(200) NOT NULL,
  `synopsis` text(200) NOT NULL,
  `valoration` int(10) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;