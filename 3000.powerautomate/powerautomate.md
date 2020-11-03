# Power Automate

## Do keep Conditions empty of steps

Try to keep the 'If yes' and 'If no' is empty as possible, because when closed it hides the steps (logic).

Try to do the **Condition** and **Terminate** if not meet, while continue the happy flow under the Condition.

![keep-condition-empty](/assets/poweratomate-keep-condition-empty.png)

## Terminate with the correct status

Terminate is often used when a Condition is not meet to run the flow. To inform the administrator, use Cancelled as status.