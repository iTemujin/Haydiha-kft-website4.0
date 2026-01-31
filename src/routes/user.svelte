<script>
    let userState = 'login';
	let userEmail = '';
	let userLoading = true;
	let error = '';

	function sleep(ms=2000) {
	return new Promise(resolve => setTimeout(resolve, ms));
	}

	let loginEmail = async () => {
		userLoading = false;
		
		const response = await fetch('/login', {
			method: 'POST',
			body: JSON.stringify({  'message':'email', 'me':userEmail }),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();
		if (data.email == userEmail)
		{
			userState = 'code'
			userLoading = true
		} else {
			await sleep()
			userLoading = true
			error = data.error
		}


	}

	let loginPassword = () => {
		userLoading = false;
		

		userState = 'logedd';
		userLoading = true;
	}

</script>


<div class="fixed flex w-80 h-120 top-5 right-3 bg-white z-50 p-5">
		{#if userState == 'login'}
		<section class="flex flex-col justify-center items-center">
			<h2 class="top-2 mb-4">Bejelentkezés / Regisztráció</h2>
			<form on:submit|preventDefault={loginEmail} class="flex flex-col gap-5
			  items-center" action="">
				<p>Kérlem, írja be az e-mail címed a továbblépéshez</p>
					<input bind:value={userEmail} id="emailInput" name="email" type="email" placeholder="Email" required>
					<p class='absolute top-71 left-10 text-red-500'>{error}</p>
				{#if userLoading}
					<button class="flex w-40 h-10 items-center justify-center gap-2  cursor-pointer
					bg-black text-white" type="submit">Tovább 
					</button>
				{:else}			
					<div class="flex w-40 h-10 items-center justify-center gap-2
					bg-black/60 text-white"> 
						<div class="rounded-full w-5 h-5 border-5 border-black/20 border-t-white animate-spin "></div>
					</div>
				{/if}
			</form>
		</section>
		{:else if userState == 'code'}
			<section class="flex flex-col w-full justify-center items-center">
				<h2 class="top-2 mb-4">Hitelesítés</h2>
				<form on:submit|preventDefault={loginPassword} class="flex flex-col gap-5" action="">
					<p>Kérlem, írja be az e-mailben kapott kódot ({userEmail})</p>
						<input id="code" name="code" type="code" placeholder="Kódot" required>
					{#if userLoading}
						<button class="flex w-40 h-10 items-center justify-center gap-2 cursor-pointer
						bg-black text-white" type="submit">Belépés 
						</button>
					{:else}			
						<div class="flex w-40 h-10 items-center justify-center gap-2
						bg-black/60 text-white"> 
							<div class="rounded-full w-5 h-5 border-5 border-black/20 border-t-white animate-spin "></div>
						</div>
					{/if}
				</form>
			</section>
		{:else if userState == 'logedd'}
			<section>
				<h2>{userEmail}</h2>
				<ul>
					<li><a href="profile">Profil / Beállítások</a></li>
					<li><a href="orders">Rendelések</a></li>
					<li><a href="shipped-orders">Kiszállított Rendelések</a></li>
					<li><a href="notice">Értesítések kezelése</a></li>
					<li><a href="profile-delete">Fiók törlés</a></li>
					<li><a href="logout">Kijelentkezés</a></li>
				</ul>
			</section>
		{:else}
		<h2>Hiba</h2>
		<p>Varatlan hiba. Az oldal 2 masodperc mulva ujra indul.</p>
		{/if}
	</div>