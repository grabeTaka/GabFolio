import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									{INFO.about.title}
								</div>

								<div className="subtitle about-subtitle">
									<div>
										<div
											className="experience"
											id="first-experience"
										>
											<img
												src="https://media.licdn.com/dms/image/C4D0BAQFEJ0yrCSp-fw/company-logo_100_100/0/1630494268935?e=1708560000&v=beta&t=oEqwr_nT-lFjRmiRsqRbH_G4ziQlYRH_RccVaPP0xHA"
												alt="facebook"
												className="experience-image"
											/>
											<div className="experience-title">
												Shopper
												<span className="experience-duration-page">
													{" "}
													Janeiro 2021 - Atual
													trabalho{" "}
												</span>
											</div>
											<div className="experience-subtitle divider">
												<strong>
													Desenvolvedor full-stack
													pleno
												</strong>
												<div className="job-description">
													Trabalho como full stack
													developer no time de
													logistica e lojas,
													contribuindo em três
													sistemas, com alta
													performance e
													escalabilidade, abaixo
													principais atividades:{" "}
													<br />
													Criar novas páginas,
													implementar várias
													funcionalidades e melhorar a
													produtividade dos usuários
													da aplicação. <br />
													Melhorar a performance dos
													sistemas utilizando jobs,
													novas arquiteturas, migrar
													base de dados do Firebase
													para MySQL, JavaScript para
													Typescript, adicionar testes
													unitários e documentações.
													<br />
												</div>
											</div>
										</div>
									</div>

									<div>
										<div
											className="experience"
											id="second-experience"
										>
											<img
												src="https://media.licdn.com/dms/image/C4E0BAQFnDgRUfDt_Pg/company-logo_100_100/0/1631301393141?e=1708560000&v=beta&t=dgmVcFKDICtA9d5nMpYF8R0RjxQgGsyejbV4mknUno0"
												alt="facebook"
												className="experience-image"
											/>
											<div className="experience-title">
												Propz
												<span className="experience-duration-page">
													{" "}
													Setembro 2020 - Dezembro
													2021{" "}
												</span>
											</div>
											<div className="experience-subtitle divider">
												<strong>
													Desenvolvedor full-stack
													pleno
												</strong>
												<div className="job-description">
													Trabalho como full stack
													developer em um sistemas
													interno de CRM que dispara
													e-mails para os clientes e
													gera painel de métricas
													retornando a receita
													incremental dos varejistas.
													<br />
												</div>
											</div>
										</div>
									</div>

									<div>
										<div
											className="experience"
											id="third-expirence"
										>
											<img
												src="https://www.market-research-companies.in//images/default.jpg"
												alt="facebook"
												className="experience-image"
											/>
											<div className="experience-title">
												Dev Tech
												<span className="experience-duration-page">
													{" "}
													Março 2018 - Setembro 2020{" "}
												</span>
											</div>
											<div className="experience-subtitle divider">
												<strong>
													Desenvolvedor full-stack
													júnior
												</strong>
												<div className="job-description">
													Trabalho como full stack
													developer em diferentes
													sistemas para diferentes
													cliente, sendo alguns deles:
													controle de estoque, mercado
													de cripto moedas,
													e-commerce.
													<br />
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
						</div>
					</div>
					<div className="page-footer" style={{ marginTop: "150px" }}>
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default About;
