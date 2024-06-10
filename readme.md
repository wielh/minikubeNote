# Minikube 教學

##  這是 Minikube 的學習筆記與簡易範例

   * Minibuke 元件說明
   * Minikube/Kubectl 常見指令
   
## 1. Minibuke 是甚麼

   * K8s是一種可用來自動化部屬、擴展及管理多個容器（Container）的系統，適用於當容器數量增加，需要穩定容器環境，以及管理資源或權限分配的狀況。
   * minikube 是 Kubernetes 輕量化的實作，它會在你本機的 VM 內建立並且執行一個單一節點的 Kubernetes 叢集。
   * Kubectl 是 Kubernetes 的 Command Line 工具，我們之後會透過 Kubectl 去操作我們的 Kubernetes Cluster

## 2. Kubernetes 元件

   * Pod: Kubernetes 運作的最小單位，意即一個Pod內部可含一個或是多個Container。而一個Pod會對應到一個應用程式，同一個Pod中的Containers則會共享相同的網路資源（如：IP地址、主機名稱等）。
   * Node: Kubernetes 運作的最小硬體單位，一個 Node（簡稱 Node）對應到一台機器，可以是實體機如你的筆電、或是虛擬機如 AWS 上的一台 EC2 或 GCP 上的一台 Computer Engine。 Minikube 固定為一個 Node。
   * Deployment: 複製多個相同的 Pod 在 Cluster 中同時提供服務，並監控 Pod 的狀態，Pod 當機我們就要重新把它啟動。
   * Service: Kubernetes 中用來定義「一群 Pod 要如何被連線及存取」的元件。

## 3. Minikube/ kubectl 指令 

* minikube 常用指令

```
    minikube start
    minikube status
    minikube stop
    minikube ssh : ssh 進入 minikube 中
    minikube ip : 查詢 minikube 對外的 ip
    minikube dashboard : 透過 minikube 提供的瀏覽器 GUI 查看 Cluster 狀況
```

* pod 相關指令 

```
    kubectl create -f <filename>.yaml : 建立 Pod
    kubectl get pods
    kubectl delete pod <podName>
```

* depolyment 相關指令 

```
    kubectl create -f <filename>.yaml : 建立 deployment
    kubectl apply -f <filename>.yaml : 更新 deployment
    kubectl set image deployment/<deployment_name> <container_name>=<image>:<tag> : 更新 image
    kubectl get deploy
    kubectl delete deploy <depolyName>
    
```

* service 相關指令 

```
    kubectl create -f <filename>.yaml : 建立 service
    minikube service <serviceName> : 運行 service 
    kubectl get services
    kubectl describe service <serviceName> : 輸出詳細訊息
```

* ingress 相關指令 

```
    minikube addons enable ingress : 安裝ingress 插件
```

* reference 

```
    https://www.youtube.com/watch?v=SL83f7Nzxr0&t=848s&ab_channel=GeekHour
    https://chengweihu.com/kubernetes-tutorial-2-service-deployment-ingress/
```

## 4. TODO

* kubernete 的 pod 連線到本地
* ingress
