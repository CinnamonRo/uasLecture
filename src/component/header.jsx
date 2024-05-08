import React from "react";
import "../css/style.css";

export default function Header (){
    return (
        <div className="HomeContainer">
            <section id="home" class="welcome-hero">
			<div class="container">
				<div class="welcome-hero-txt">
					<h2>OBJEK WISATA JAWA BARAT <br></br>DARI SETIAP DAERAH </h2>
					<p>
						Mulai dari Pengunungan, Kebun, Pantai dan Banyak lagi Objek Wisata Yang Dapat Ditemukan. 
					</p>
				</div>
			</div>
		    </section>

		<section id="list-topics" class="list-topics">
			<div class="container">
				<div class="list-topics-content">
					<ul>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
									<i class="flaticon-restaurant"></i>
								</div>
								<h2><a href="#">Curug</a></h2>
							</div>
						</li>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
									<i class="flaticon-travel"></i>
								</div>
								<h2><a href="#">Pengunungan</a></h2>
							</div>
						</li>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
									<i class="flaticon-building"></i>
								</div>
								<h2><a href="#">Kebun</a></h2>
							</div>
						</li>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
									<i class="flaticon-pills"></i>
								</div>
								<h2><a href="#">Pantai</a></h2>
							</div>
						</li>
						<li>
							<div class="single-list-topics-content">
								<div class="single-list-topics-icon">
									<i class="flaticon-transport"></i>
								</div>
								<h2><a href="#">Tempat Wisata</a></h2>
							</div>
						</li>
					</ul>
				</div>
			</div>

		</section>
	
		
		
        </div>
    )
}