# Host a Website on TF Grid via eVDC

By using eVDC you can now deploy and host your own website on top of the [ThreeFold Grid](threefold__threefold_grid).

![](cloud__website_preview.png  )

## Requirements

- A **github account**.
- A **public github repository** complete with folders containing your website codes and files. [**Click here**](https://github.com/threefoldfoundation/website_example) to see an example of a website repo that you can fork (copy to your own github).
- **Optional for custom domain**: an active domain that assigns to a particular IP that will be given to you during deployment. Depending where you purchased your domain, each domain registery has its own procedure on how to assign an IP. Click [**here**](https://www.hostmysite.com/support/cpanel/dns/domain_point/) to read a general tutorial on how to assign an IP to your domain.
- An **active eVDC** with sufficient capacity.

## Get Started

Once youre logged in the eVDC, find the **Website** marketplace widget on your admin panel and click on **Deploy** button.

![](cloud__website_startnew.png  )

Create a name for your new website. This name will be used to identify your deployment on your 'Deployed Solutions' list.

![](cloud__website_name.png  )

Select the domain type for your own website. For deployment with random subdomain, select 'Choose subdomain for me on a gateway',. For deployment with a particular available subdomain, select 'Choose a custom subdomain on a gateway. To host a website using your own domain, select 'choose a custom domain'.

![](cloud__website_domain.png  )

Select the vdc capacity plan for your website usage

![](cloud__website_capacity.png  )

Add your website repository files to the deployment.

![](cloud__website_identify.png  )

- Repository url: the url address of your website's source codes on github
- Branch: the main official working version of your project. Read more about github branch [here](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/about-branches)
- Source directory: the name of the main folder in your github repository where all your html codes, css, index.html page, and other codes that make up your website pages live.

To create a website from a template website from ThreeFold, go to [Template Website](https://github.com/threefoldfoundation/website_example) on github and click on fork.

![](cloud__website_fork.png  )

Go to your newly forked github repository and copy the Repository url on your forked repository

![](cloud__website_copy.png  )

Paste the url to the chatflow 'Repository url' form.

![](cloud__website_paste.png  )

Identify the branch of your website (ex. `main` ), identify the main source folder of your website and click 'Next'

![](cloud__website_identify.png  )

Wait a few minutes while your new website is being deployed...

![](cloud__website_deploy.png  )

Congratulations! you just successfully hosted a website on the [ThreeFold Grid](threefold__threefold_grid)!
![](cloud__website_success.png  )

Click on the website domain to open and preview your newly hosted website.

![](cloud__website_preview.png  )

Remember, you can always go back to your forked website template and customize your website content even after its deployed. Always remember which github repo you are using for the hosted website, and happy coding!