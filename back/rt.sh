curl -H "Content-Type: application/json" \
     -H "Authorization: Bearer 43E3EBD28D657A0E13B1615095112734BF7683A58C624E5FA70BF4FB01ABF250" \
     -X POST "https://4cf20f8b-1c04-4781-849e-e7903094aed7.pushnotifications.pusher.com/publish_api/v1/instances/4cf20f8b-1c04-4781-849e-e7903094aed7/publishes" \
     -d '{"interests":["hello"],"web":{"notification":{"title":"Hello","body":"Hello, world!"}}}'