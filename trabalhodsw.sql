-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 28-Dez-2020 às 00:54
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `trabalhodsw`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `criancas`
--

CREATE TABLE `criancas` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `dataNasc` varchar(100) NOT NULL,
  `sexo` varchar(10) NOT NULL,
  `grauParentesco` varchar(20) NOT NULL,
  `corOlho` varchar(20) NOT NULL,
  `corCabelo` varchar(20) NOT NULL,
  `tipoCabelo` varchar(20) NOT NULL,
  `tomPele` varchar(20) NOT NULL,
  `observacao` varchar(300) DEFAULT NULL,
  `qrcodeId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estrutura da tabela `qrcodes`
--

CREATE TABLE `qrcodes` (
  `id` int(11) NOT NULL,
  `codigo` varchar(100) NOT NULL,
  `localizacao` varchar(100) NOT NULL,
  `usuarioId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `qrcodes`
--

INSERT INTO `qrcodes` (`id`, `codigo`, `localizacao`, `usuarioId`) VALUES
(1, 'teste', 'teste', NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `email` varchar(100) NOT NULL,
  `cidade` varchar(100) NOT NULL,
  `estado` varchar(20) NOT NULL,
  `rua` varchar(100) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  `numero` varchar(10) NOT NULL,
  `senha` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `criancas`
--
ALTER TABLE `criancas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `qrcodeId` (`qrcodeId`);

--
-- Índices para tabela `qrcodes`
--
ALTER TABLE `qrcodes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuarioId` (`usuarioId`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `criancas`
--
ALTER TABLE `criancas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT de tabela `qrcodes`
--
ALTER TABLE `qrcodes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `criancas`
--
ALTER TABLE `criancas`
  ADD CONSTRAINT `criancas_ibfk_1` FOREIGN KEY (`qrcodeId`) REFERENCES `qrcodes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Limitadores para a tabela `qrcodes`
--
ALTER TABLE `qrcodes`
  ADD CONSTRAINT `qrcodes_ibfk_1` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
