class Element {
  private static STYLE = `
        <style>
            body {
                margin: auto;
                padding: 0;
                font-family: 'Arial', sans-serif;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }

            .hero-section {
                position: relative;
                height: 400px;
                background: url('https://i.imgur.com/1Wrd0eN.jpeg') center/cover no-repeat;
                color: #fff;
                text-align: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .hero-section h1 {
                font-size: 3em;
                margin: 0;
                padding: 1rem;
            }

            .hero-section p {
                font-size: 1.5em;
                margin: 10px 0 0 0;
            }

            .sign-out {
                margin-top: 2rem;
            }

            form {
                width: 300px; /* Set a fixed width for the form container */
                text-align: center;
            }

            form div {
                margin-bottom: 1rem;
            }

        </style>`

  public static SIGNIN_FORM = `

        ${this.STYLE}
            <h1>Sign In</h1>
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" type="email" required />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" required/>
                </div>
                <button type="submit">Submit</button>
            </form>`

  public static SIGN_OUT = `

                ${this.STYLE}

                <h1>Sign Out</h1>
                <form method="POST">
                    <button type="submit">Sign Out</button>
                </form>`

  public static CORE(res: string) {
    return `
        ${this.STYLE}

        <div class="hero-section">
            <h1>${res}</h1>
            <p>Welcome to Bobbi Server</p>

            <form method="POST">
                <div class='sign-out'>
                    <a href="/sign-out">
                        <button type="submit">Sign Out</button>
                    </a>
                </div>
            </form>
        </div>`
  }

  public static SIGNIN_REDIR = ``
}

export default Element
