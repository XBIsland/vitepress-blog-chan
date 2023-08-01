---
title: Vercel 关联个人域名
date: 2023-07-31
tags:
  - vercel
  - depoly
---

# Vercel 关联个人域名

记录如何将个人域名解析映射到 [Vercel](https://vercel.com/) 部署的项目，本文域名解析以阿里云控制台为例。

必备条件：
1. 准备一个域名
2. 已部署的 [Vercel](https://vercel.com/) 项目

## 阿里云控制台
登录阿里云[云解析控制台](https://dns.console.aliyun.com/#/dns/domainList)


### 方法1：CNAME 域名指向

#### 1. 添加 CNAME 记录
在根域名的解析设置页面「添加记录」，「记录类型」选择 `CNAME`，记录值填写 `cname.vercel-dns.com`，点击「确定」新增，等待解析成功。

:::tip
官方文档：[How do I point a subdomain to a service outside of Vercel?](https://vercel.com/guides/pointing-subdomains-to-external-services#adding-a-cname-record)
:::

![image-20230731164454536](/images/vercel_domain/20230801-115324.jpg)


### 方法2：TXT 子域授权

#### 1. 获取子域名记录值

点击添加域名，输入需要解析的子域名，此时会提示「*添加子域，请先前往进行TXT授权校验*」，点击「TXT 授权校验」后记下「记录值」，后面验证需要用到。

![image-20230731164454536](/images/vercel_domain/Snipaste_2023-07-31_17-47-32.png)

#### 2. 设置 TXT 授权
记下「记录值」后关闭所有弹窗，回到域名列表页面，点击根域名的「解析设置」进入配置页面。

![image-20230731164454536](/images/vercel_domain/20230731-175501.jpg)

点击「添加记录」，弹窗表单中的「记录类型」选中为 `TXT`，「主机记录」为固定的 `alidnscheck`，「记录值」为第一步获取的「*记录值*」，点击「确定」新增。

我们第一步新增子域名的「TXT 校验」就是用新增的这条 `alidnscheck` 记录来进行校验的。

![image-20230731164454536](/images/vercel_domain/20230731-180158.jpg)

#### 3. 新增子域名

设置完授权TXT 后，重新按照第一步的步骤，点击「验证」，验证成功后点击「确认添加域名」。

![image-20230731164454536](/images/vercel_domain/20230731-180548.jpg)
![image-20230731164454536](/images/vercel_domain/20230731-180702.jpg)

#### 4. 子域名解析

添加完之后能在列表看到新增的子域名，点击「解析设置」进入二级页面，并添加一条记录，「记录值」为 `76.76.21.21` ，等待解析成功。
:::tip
当你的项目部署在 Vercel 上时，Vercel 站点服务器的 IP 地址为 `76.76.21.21` 。

官方文档：[Domains Overview](https://vercel.com/docs/concepts/projects/domains)
:::

![image-20230731164454536](/images/vercel_domain/Snipaste_2023-07-31_18-08-34.png)
![image-20230731164454536](/images/vercel_domain/20230731-181431.jpg)




## Vercel Domains 配置

完成域名解析配置后，在 Vercel 项目 Settings 下的 Domains 新增子域名即可，等待 Vercel 重新部署即可。

![image-20230731164454536](/images/vercel_domain/20230731-181650.jpg)

<Comments />