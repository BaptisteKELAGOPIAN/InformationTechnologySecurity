<script>
    let testconnection = 0;
    let login = "";
    let password = "";

    async function loginUser() {
        const response = await fetch("https://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: login,
                password: password,
            }),
        });

        const data = await response.json();
        if (data === true) {
            testconnection = 1;
        } else {
            testconnection = 2;
        }
        console.log(data);
    }

    let login2 = "";
    let password2 = "";

    async function createUser() {
        const response = await fetch("https://localhost:3000/auth/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                username: login2,
                password: password2,
            }),
        });

        const data = await response;
        console.log(data);
    }
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="connection app" />
</svelte:head>

<section>
    <div>
        <h1>Connection</h1>
        <div class="login">
            <p>Login</p>
            <input type="text" placeholder="User" bind:value={login} />
            <p>Password</p>
            <input
                type="password"
                placeholder="Password"
                bind:value={password}
            />
            <button class="loginBtn" on:click={loginUser}>Connect</button>
            {#if testconnection == 1}
                <p>Connection success</p>
            {:else if testconnection == 2}
                <p>Connection fail</p>
            {/if}
        </div>
        <h1>Create</h1>
        <div class="login">
            <p>Login</p>
            <input type="text" placeholder="User" bind:value={login2} />
            <p>Password</p>
            <input
                type="password"
                placeholder="Password"
                bind:value={password2}
            />
            <button class="loginBtn2" on:click={createUser}>Create</button>
        </div>
    </div>
</section>

<style>
    section {
        background-color: #fff;
        padding: 40px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    h1 {
        font-size: 32px;
        margin-bottom: 20px;
    }
    .login {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .login p {
        margin: 10px 0;
        font-weight: bold;
    }
    input[type="text"],
    input[type="password"] {
        padding: 8px;
        margin: 8px 0;
        width: 200px;
        border-radius: 4px;
        border: 1px solid #ccc;
    }
    .loginBtn {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: #4caf50;
        color: white;
        font-size: 16px;
        cursor: pointer;
    }
    .loginBtn:hover {
        background-color: #45a049;
    }
    .loginBtn2 {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: #001277;
        color: white;
        font-size: 16px;
        cursor: pointer;
    }
    .loginBtn2:hover {
        background-color: rgb(44, 0, 163);
    }
</style>
