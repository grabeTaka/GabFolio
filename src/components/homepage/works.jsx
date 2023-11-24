import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C4D0BAQFEJ0yrCSp-fw/company-logo_100_100/0/1630494268935?e=1708560000&v=beta&t=oEqwr_nT-lFjRmiRsqRbH_G4ziQlYRH_RccVaPP0xHA"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Shopper</div>
							<div className="work-subtitle">
								Desenvolvedor full-stack pleno
							</div>
							<div className="work-duration">2021 - Atual trabalho</div>
						</div>

						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/C4E0BAQFnDgRUfDt_Pg/company-logo_100_100/0/1631301393141?e=1708560000&v=beta&t=dgmVcFKDICtA9d5nMpYF8R0RjxQgGsyejbV4mknUno0"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Propz</div>
							<div className="work-subtitle">
								Desenvolvedor de software pleno
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>

						<div className="work">
							<img
								src="https://www.market-research-companies.in//images/default.jpg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Continuo Dev Tecnologia</div>
							<div className="work-subtitle">
								Desenvolvedor de software junior
							</div>
							<div className="work-duration">2018 - 2019</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
