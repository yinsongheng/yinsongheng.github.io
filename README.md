# academic-homepage

[![Preview](assets/images/etc/preview.png)](https://luost26.github.io/academic-homepage/)

[![pages-build-deployment](https://github.com/luost26/academic-homepage/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/luost26/academic-homepage/actions/workflows/pages/pages-build-deployment)
[![Hits](https://hits.sh/github.com/luost26/academic-homepage.svg?view=today-total)](https://hits.sh/github.com/luost26/academic-homepage/)
[![GitHub stars](https://img.shields.io/github/stars/luost26/academic-homepage)](https://github.com/luost26/academic-homepage)
[![GitHub forks](https://img.shields.io/github/forks/luost26/academic-homepage)](https://github.com/luost26/academic-homepage/forks)
<!--[![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fluost26.github.io%2Facademic-homepage)](https://validator.nu/?doc=https%3A%2F%2Fluost26.github.io%2Facademic-homepage)-->

A GitHub Pages (Jekyll) template for personal academic website. Click [here](https://luost26.github.io/academic-homepage/) to see the demo.

## User Community

[🏡](https://luost.me/)
[:star:](https://cch1999.github.io/)
[:star:](https://kyrrego.github.io/)
[:star:](https://ced3-han.github.io/)
[:star:](https://lihengchen.com/)
[:star:](https://hpwang-whu.github.io/)
[:star:](https://zhang-yingyi.github.io/)
[:star:](https://wby24.github.io/)
[:star:](https://pengfeixu.com/)
[:star:](https://boqiuphd.github.io/)
[:star:](https://www.huabing.li/)
[:star:](https://xiecuiying.github.io/)
[:star:](https://hannyang.github.io/)
[:star:](https://king-play.github.io/)
[🤖](https://andrewcwlee.github.io)
[:star:](https://laiyao1.github.io)
[🌜](https://tmsultan.github.io)
[🚀](https://zaxguo.github.io)
[:gemini:](https://hongyang-du.github.io)
[:star:](https://thuanz123.github.io)
[🧬](https://gdalba.github.io/)
[:star:](https://yhhan.com/)
[🌔](https://chen-huaneng.github.io/academic)
[:star:](https://jwklee.github.io/)
[😼](https://onethousandwu.com/)
[🔬](https://kwen-chen.github.io/)
[🧑‍🔬](https://shengxiang-lin.github.io/)
[🗣️](https://henry-h22.github.io/)

:hugs: Feel free to tell us if you are using this template for your website by creating an issue [here](https://github.com/luost26/academic-homepage/issues/new?assignees=&labels=&projects=&template=user-report.md&title=I+am+using+this+template%21).

### Acknowledgements

The improvements of this template have been inspired by the customizations and feedbacks from the following users:
- 😼 [onethousandwu.com](https://onethousandwu.com/): increased corner radius [[Repo]](https://github.com/oneThousand1000/oneThousand1000.github.io)
- :star: [shiwonkim.github.io](https://shiwonkim.github.io/): two-column main page layout [[Repo]](https://github.com/shiwonkim/shiwonkim.github.io)
- :star: [yqxie99.github.io](https://yqxie99.github.io/): blog feature [[Repo]](https://github.com/YQXie99/YQXie99.github.io/tree/feat/add_blog_page)
- :star: [kwen-chen.github.io](https://kwen-chen.github.io/): blog feature [[Repo]](https://github.com/Kwen-Chen/Kwen-Chen.github.io)

## Need Help?

If you run into **any** issues while using this template, or have suggestions for improvements, please don't hesitate to create an issue [here](https://github.com/luost26/academic-homepage/issues/new).

### FAQs

- [Need blogging feature?](https://github.com/luost26/academic-homepage/issues/13#issuecomment-2646371324)
- [How to show citation count for papers?](https://github.com/luost26/academic-homepage/issues/29#issuecomment-3222496187)


## Getting Started

1. First, click the "Use this template" button to create a new repository. The name of the repository should be `<your-github-username>.github.io` (click [here](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#types-of-github-pages-sites) to learn more about naming a GitHub Pages repository).

### Running Locally (Debug & Preview)

2. Follow the **step 1** and **step 2** of the instruction [here](https://jekyllrb.com/docs/) to install prerequisites and jekyll.

3. Clone your forked repository to your local machine.

4. Run the following command in the root directory of the repository to **start** the local server:

   ```bash
   bundle exec jekyll serve
   ```

   > If you get `bundle: command not found`, run `gem install bundler` once first.
   > Add `--port 4001` if port 4000 is already in use, or `--livereload` to auto-refresh the browser.

5. Open the displayed URL (by default <http://127.0.0.1:4000/>) to preview the site. Jekyll watches the folder and rebuilds automatically when you save a file — just refresh the browser. The one exception is `_config.yml`: stop and restart the server for changes to it to take effect.

   > ⚠️ Do **not** use VS Code Live Server (or any plain static-file server) — it serves the raw template files and shows `{% ... %}` source instead of the built site. Only `jekyll serve` compiles the site the same way GitHub Pages does.

6. To **stop** the server, press <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal where it's running. If you started it in the background instead, stop it with:

   ```bash
   pkill -f "jekyll serve"
   ```

#### Previewing from another machine

By default the server binds to `127.0.0.1` (localhost), which is only reachable *on the same machine*. To preview from a different device (e.g. this repo lives on a headless/remote Ubuntu box), bind to all interfaces with `--host 0.0.0.0`:

```bash
export GEM_HOME="$PWD/.gems" PATH="$PWD/.gems/bin:$PATH" && exec bundle exec jekyll serve --host 0.0.0.0 --port 4000
```

> The `export GEM_HOME=...` prefix is only needed if the gems were installed into a repo-local `.gems/` folder (as in this setup); with a normal system/user gem install, `bundle exec jekyll serve --host 0.0.0.0` is enough. The key part is `--host 0.0.0.0`.

Then, from the other machine, browse to the host's IP on port 4000 — e.g. `http://<LAN-IP>:4000/`, or `http://<tailscale-IP>:4000/` if using Tailscale. Make sure the firewall allows port 4000.

For an untrusted network, prefer an SSH tunnel instead of exposing the port — keep the default localhost bind and run this on the *remote* machine:

```bash
ssh -L 4000:localhost:4000 <user>@<host>   # then open http://localhost:4000/
```


### Deploying to GitHub Pages

2. Go to the repository settings and enable GitHub Pages. Detailed instructions can be found [here](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-your-site).

3. Navigate to your created website, and follow the instructions displayed on the homepage (if any) to finalize the setup.

