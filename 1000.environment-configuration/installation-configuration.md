---
rule_id: 1204
rule_category: class-design
title: This is another rule 3
severity: Depends
read_more: false
---

# Installation & configuration 

## Default environment is the Personal shared playground (shared)

![environment-naming-admin](/assets/environment-naming-admin.png)

Environments are tied to a geographic location that is configured at the time the
the environment is created.

Environment can be used to target different audiences and/or for different purposed such as dev, test, and production.

Data Loss Perevention (DLP) policies can be applied to individual environment or tenant

Every tenant has a Default environment

Non-default environments can be created by licensed PowerApps and Flow user and
can be restricted to only global and service admins via a tenant settings.


## Deployment stratagy for customer type 1 & 2

Unmanged in Production vs Managed in production

## The five layers of security
see image in asset

## Pervent data leakage

Data loss prevention policies (DLP) enforce rules for which connectors can be used togheter.

Connectors are classified as either Business Data only or No Business Data allowed.

A connector in the business data oly group can only be used with other connectors from that group in the same app or flow.

Tenant admins can define policies that apply to all environments.

Multiple policies can apply to an environment

The most restricive policy applies to the combination fo connectors.

Use ONLY selected and EXCEPT to tailor which environment are impacted

images in assets

## Security

Non-interactive:

- Poor: Connection string
- Less poor: Encrypted string
- Slightly Better: Non-interactive user
- Best: App service
- Bester: ClientId + Secret
- Bestest: Certificate-based
- Bonus points: Azure Vault
- Medal: Managed Identities

Interactive:

- Passive
  - Poor: Connection string
  - Still poor: Encrypted connection string
  - Better: Connection string deployed as part of Azure app
  - Best: Registered app
  - Best: OAuth if impersonation is required

- Active
  - Poor: Connection string
  - Better: Prompt for password
  - Better: Use registered app
  - Best: Xrm.Tooling

## Solutions

- Focus on small footprint
- (Re)use as much as possible of default functionality. Focus on What-if scenario that ure solution is removed: will the data still be available (as much as possible).

Solution by type vs Solution by feature/functionality (prefered)