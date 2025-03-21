import { Address } from 'viem';
import { base, gnosis } from 'wagmi/chains';

import { Network } from 'types/index';

export const SERVICE_REGISTRY_L2_ADDRESSES: Record<Network, Address> = {
  [gnosis.id]: '0x9338b5153AE39BB89f50468E608eD9d764B755fD',
  [base.id]: '0x3C1fF68f5aa342D296d4DEe4Bb1cACCA912D95fE',
} as const;

export const SERVICE_REGISTRY_L2_ABI = [
  {
    inputs: [
      {
        internalType: 'string',
        name: '_name',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_symbol',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_baseURI',
        type: 'string',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'AgentInstanceRegistered',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'AgentInstancesSlotsFilled',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'agentId',
        type: 'uint256',
      },
    ],
    name: 'AgentNotFound',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'agentId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'AgentNotInService',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'componentId',
        type: 'uint256',
      },
    ],
    name: 'ComponentNotFound',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HashExists',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'sent',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expected',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'IncorrectAgentBondingValue',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'sent',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expected',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'IncorrectRegistrationDepositValue',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'manager',
        type: 'address',
      },
    ],
    name: 'ManagerOnly',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'provided',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'expected',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'OnlyOwnServiceMultisig',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'OperatorHasNoInstances',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'provided',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'max',
        type: 'uint256',
      },
    ],
    name: 'Overflow',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnerOnly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Paused',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ReentrancyGuard',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'ServiceMustBeInactive',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'TransferFailed',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'multisig',
        type: 'address',
      },
    ],
    name: 'UnauthorizedMultisig',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'agentId',
        type: 'uint256',
      },
    ],
    name: 'WrongAgentId',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'numValues1',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'numValues2',
        type: 'uint256',
      },
    ],
    name: 'WrongArrayLength',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'WrongOperator',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'state',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'WrongServiceState',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'currentThreshold',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'minThreshold',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'maxThreshold',
        type: 'uint256',
      },
    ],
    name: 'WrongThreshold',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroValue',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'ActivateRegistration',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'baseURI',
        type: 'string',
      },
    ],
    name: 'BaseURIChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'multisig',
        type: 'address',
      },
    ],
    name: 'CreateMultisigWithAgents',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'configHash',
        type: 'bytes32',
      },
    ],
    name: 'CreateService',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'DeployService',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Deposit',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'drainer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Drain',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'drainer',
        type: 'address',
      },
    ],
    name: 'DrainerUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'manager',
        type: 'address',
      },
    ],
    name: 'ManagerUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'OperatorSlashed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'OperatorUnbond',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'OwnerUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'receiver',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Refund',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'agentInstance',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'agentId',
        type: 'uint256',
      },
    ],
    name: 'RegisterInstance',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'TerminateService',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'configHash',
        type: 'bytes32',
      },
    ],
    name: 'UpdateService',
    type: 'event',
  },
  {
    inputs: [],
    name: 'CID_PREFIX',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'serviceOwner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'activateRegistration',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'baseURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newDrainer',
        type: 'address',
      },
    ],
    name: 'changeDrainer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newManager',
        type: 'address',
      },
    ],
    name: 'changeManager',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'multisig',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'permission',
        type: 'bool',
      },
    ],
    name: 'changeMultisigPermission',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'changeOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'serviceOwner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'configHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint32[]',
        name: 'agentIds',
        type: 'uint32[]',
      },
      {
        components: [
          {
            internalType: 'uint32',
            name: 'slots',
            type: 'uint32',
          },
          {
            internalType: 'uint96',
            name: 'bond',
            type: 'uint96',
          },
        ],
        internalType: 'struct AgentParams[]',
        name: 'agentParams',
        type: 'tuple[]',
      },
      {
        internalType: 'uint32',
        name: 'threshold',
        type: 'uint32',
      },
    ],
    name: 'create',
    outputs: [
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'serviceOwner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'multisigImplementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'deploy',
    outputs: [
      {
        internalType: 'address',
        name: 'multisig',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'drain',
    outputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'drainer',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'unitId',
        type: 'uint256',
      },
    ],
    name: 'exists',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'getAgentInstances',
    outputs: [
      {
        internalType: 'uint256',
        name: 'numAgentInstances',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'agentInstances',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'getAgentParams',
    outputs: [
      {
        internalType: 'uint256',
        name: 'numAgentIds',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint32',
            name: 'slots',
            type: 'uint32',
          },
          {
            internalType: 'uint96',
            name: 'bond',
            type: 'uint96',
          },
        ],
        internalType: 'struct AgentParams[]',
        name: 'agentParams',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'getApproved',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'agentId',
        type: 'uint256',
      },
    ],
    name: 'getInstancesForAgentId',
    outputs: [
      {
        internalType: 'uint256',
        name: 'numAgentInstances',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'agentInstances',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'getOperatorBalance',
    outputs: [
      {
        internalType: 'uint256',
        name: 'balance',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'getPreviousHashes',
    outputs: [
      {
        internalType: 'uint256',
        name: 'numHashes',
        type: 'uint256',
      },
      {
        internalType: 'bytes32[]',
        name: 'configHashes',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'getService',
    outputs: [
      {
        components: [
          {
            internalType: 'uint96',
            name: 'securityDeposit',
            type: 'uint96',
          },
          {
            internalType: 'address',
            name: 'multisig',
            type: 'address',
          },
          {
            internalType: 'bytes32',
            name: 'configHash',
            type: 'bytes32',
          },
          {
            internalType: 'uint32',
            name: 'threshold',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'maxNumAgentInstances',
            type: 'uint32',
          },
          {
            internalType: 'uint32',
            name: 'numAgentInstances',
            type: 'uint32',
          },
          {
            internalType: 'enum ServiceRegistryL2.ServiceState',
            name: 'state',
            type: 'uint8',
          },
          {
            internalType: 'uint32[]',
            name: 'agentIds',
            type: 'uint32[]',
          },
        ],
        internalType: 'struct ServiceRegistryL2.Service',
        name: 'service',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'manager',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'mapAgentInstanceOperators',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'mapConfigHashes',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'mapMultisigs',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'mapOperatorAndServiceIdAgentInstances',
    outputs: [
      {
        internalType: 'address',
        name: 'instance',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: 'agentId',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'mapOperatorAndServiceIdOperatorBalances',
    outputs: [
      {
        internalType: 'uint96',
        name: '',
        type: 'uint96',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'mapServiceAndAgentIdAgentInstances',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'mapServiceAndAgentIdAgentParams',
    outputs: [
      {
        internalType: 'uint32',
        name: 'slots',
        type: 'uint32',
      },
      {
        internalType: 'uint96',
        name: 'bond',
        type: 'uint96',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'mapServices',
    outputs: [
      {
        internalType: 'uint96',
        name: 'securityDeposit',
        type: 'uint96',
      },
      {
        internalType: 'address',
        name: 'multisig',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'configHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint32',
        name: 'threshold',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'maxNumAgentInstances',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'numAgentInstances',
        type: 'uint32',
      },
      {
        internalType: 'enum ServiceRegistryL2.ServiceState',
        name: 'state',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'ownerOf',
    outputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
      {
        internalType: 'address[]',
        name: 'agentInstances',
        type: 'address[]',
      },
      {
        internalType: 'uint32[]',
        name: 'agentIds',
        type: 'uint32[]',
      },
    ],
    name: 'registerAgents',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'bURI',
        type: 'string',
      },
    ],
    name: 'setBaseURI',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'agentInstances',
        type: 'address[]',
      },
      {
        internalType: 'uint96[]',
        name: 'amounts',
        type: 'uint96[]',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'slash',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'slashedFunds',
    outputs: [
      {
        internalType: 'uint96',
        name: '',
        type: 'uint96',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'serviceOwner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'terminate',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'refund',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'tokenByIndex',
    outputs: [
      {
        internalType: 'uint256',
        name: 'unitId',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'unitId',
        type: 'uint256',
      },
    ],
    name: 'tokenURI',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'unbond',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: 'refund',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'serviceOwner',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'configHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint32[]',
        name: 'agentIds',
        type: 'uint32[]',
      },
      {
        components: [
          {
            internalType: 'uint32',
            name: 'slots',
            type: 'uint32',
          },
          {
            internalType: 'uint96',
            name: 'bond',
            type: 'uint96',
          },
        ],
        internalType: 'struct AgentParams[]',
        name: 'agentParams',
        type: 'tuple[]',
      },
      {
        internalType: 'uint32',
        name: 'threshold',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'serviceId',
        type: 'uint256',
      },
    ],
    name: 'update',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
