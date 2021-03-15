# Host a Wiki on TF Grid via eVDC

By using eVDC you can now deploy and host your own wiki on top of the [ThreeFold Grid](threefold__threefold_grid).

![](cloud__evdc_wiki_11_wiki_result.png  )

## Requirements

- A **github account**.
- A **public github repository** complete with folders containing your wiki codes and files. [**Click here**](https://github.com/threefoldfoundation/wiki_example) to see an example of a wiki repo that you can fork (copy to your own github).
- **Optional for custom domain**: an active domain that assigns to a particular IP that will be given to you during deployment. Depending where you purchased your domain, each domain registry has its own procedure on how to assign an IP. Click [**here**](https://www.hostmysite.com/support/cpanel/dns/domain_point/) to read a general tutorial on how to assign an IP to your domain.
- An **active eVDC** with sufficient capacity.

## Get Started

In the marketplace, click on the `DEPLOY` button of the `Wiki` widget.

![](cloud__evdc_wiki_01_widget.png  )

Give your solution a name.

![](cloud__evdc_wiki_02_chatflow_name.png  )

You can choose to create a url which is part of your own domain, or have one auto-generated.

![](cloud__evdc_wiki_03_chatflow_subdomain.png  )

Depending on the size of you wiki, you choose bigger or smaller amount of hardware resources to be reserved.

![](cloud__evdc_wiki_04_chatflow_config_size.png  )

Configure the setup of your threefold: info on source code (like the Github repo, branch and source location), and give it a title.

![](cloud__evdc_wiki_05a_chatflow_config_wiki.png  )

With all this info, the wiki can get published.

![](cloud__evdc_wiki_06_chatflow_init.png  )

Done !

![](cloud__evdc_wiki_07_chatflow_success.png  )

You can directly visit the published wiki through the indicated url.

![](cloud__evdc_wiki_11_wiki_result.png  )

Remember, you can always go back to your forked wiki template and customize your wiki content even after its deployed. Add the command `/force_update` at the end in the url to push the latest content.
Always remember which github repo and branch you are using for the hosted wiki, and happy coding!