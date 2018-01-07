<template>
	<div>
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<router-link class="navbar-brand" to="/" exact><i class="fa fa-ravelry fa-lg" aria-hidden="true"></i> Cyber Stats</router-link>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
				<ul class="navbar-nav mr-auto">
					<li class="nav-item active">
						<router-link class="nav-link" to="/" exact>Home <span class="sr-only">(current)</span></router-link>
					</li>
					<li class="nav-item">
						<router-link class="nav-link" to="#">About Us</router-link>
					</li>
				</ul>
				<form class="form-inline my-2 my-lg-0">
					<input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				</form>
			</div>
		</nav>
	</div>
</template>
