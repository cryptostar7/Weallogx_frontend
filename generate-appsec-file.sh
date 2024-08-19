#!/bin/bash
echo "Generating AppSec file"
cat <<EOF > appspec.yml
version: 0.0
Resources:
  - TargetService:
      Type: AWS::ECS::Service
      Properties:
        TaskDefinition: $1
        LoadBalancerInfo: 
          ContainerName: $2
          ContainerPort: '8000'
EOF
