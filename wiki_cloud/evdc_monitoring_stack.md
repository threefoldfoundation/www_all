# Monitor Kubernetes Clusters using Monitoring Stack

<!--- TODO 
- intro: what is monitoring stack what are included in monitoring stack
- explain what is prometheus, what's the use / what can it monitor
- explain what is grafana , what can it monitor, what's the use / what can it monitor
- requirements: explain requirements
- getting started explain deployment steps
- use case: give 1 example of monitoring on the deployed  grafana / prometheus
-------------->
The health of the VDC you deploy can be monitored. A stack has been prepared that offers monitoring through Prometheus and Grafana. A Helm chart `kube-prometheus-stack` is available, which offers Prometheus and Grafana as tooling to monitor your VDC. 

## What is Prometheus

[Prometheus](https://prometheus.io/) is a free software application used for event monitoring and alerting. It records real-time metrics in a time series database (allowing for high dimensionality).

## What is Grafana

[Grafana](https://grafana.com) has become the world’s most popular technology used to compose observability dashboards with everything from Prometheus & Graphite metrics, to logs and application data to power plants and beehives.

## Getting Started

The monitoring stack is available as a solution in the marketplace. 

![](cloud__evdc_k8s_monitoring_01_mktpl.png  )

Click `Deploy` and go through a simple chatflow to configure the monitoring on your cluster. 

![](cloud__evdc_k8s_monitoring_02_mktpl2.png  )

A few elements need to be provided. 
First give your monitoring the name you want (will be part of the url).

![](cloud__evdc_k8s_monitoring_03_name.png  )

You can configure the url to be auto-generated, or part of your own domain. 

![](cloud__evdc_k8s_monitoring_04_subdomain.png  )

This information is enough to prepare the Monitoring Stack. 

![](cloud__evdc_k8s_monitoring_05_deploying.png  )

Choose the size of the hardware to be reserved for your monitoring solution. 

![](cloud__evdc_k8s_monitoring_06_flavour.png  )

Now there is enough information to set up the monitoring stack on your Kubernetes cluster. 

![](cloud__evdc_k8s_monitoring_07_init.png  )

And that's it: the url's are available to access your monitoring solution, with both UIs on Prometheus and Grafana. 

![](cloud__evdc_k8s_monitoring_08_success.png  )

![](cloud__evdc_k8s_monitoring_09_prometheus.png  )

![](cloud__evdc_k8s_monitoring_09_grafana1.png  )

![](cloud__evdc_k8s_monitoring_11_grafana3.png  )

> For the installation of Kubernetes monitoring on your local machine, please read [__Local Monitoring__](cloud__evdc_monitoring_local.md)).
