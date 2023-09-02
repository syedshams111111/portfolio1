import React from 'react';
import { FaEnvelope, FaGithub, FaGoodreads, FaLinkedin } from 'react-icons/fa';

const year = new Date().getFullYear().toString();

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-links">
				<a
					href="/"
					target="_blank"
					rel="noreferrer"
					aria-label="Github"
				>
					<FaGithub className="footer-icon icon" />
				</a>

				<a
					href="/"
					target="_blank"
					rel="noreferrer"
					aria-label="Email"
				>
					<FaEnvelope className="footer-icon icon" />
				</a>

				<a
					href="/"
					target="_blank"
					rel="noreferrer"
					aria-label="Linkedin"
				>
					<FaLinkedin className="footer-icon icon" />
				</a>
				<a
					href="/"
					target="_blank"
					rel="noreferrer"
					aria-label="Books that I have read"
				>
					<FaGoodreads className="footer-icon icon" />
				</a>
			</div>

			<div>
				<p>Developed by Shah-Tech.</p>
				<p>
					Copyright{' '}
					<span id="copyright" className="copyright">
						{`${year}©`}
					</span>{' '}
					Shah-Tech. All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
