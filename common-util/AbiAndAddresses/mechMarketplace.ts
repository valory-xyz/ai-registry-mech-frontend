import { Address } from 'viem';
import { base, gnosis } from 'wagmi/chains';

import { Network } from 'types/index';

export const MECH_MARKETPLACE_ADDRESSES: Record<Network, Address> = {
  [gnosis.id]: '0x735FAAb1c4Ec41128c367AFb5c3baC73509f70bB',
  [base.id]: '0xf24eE42edA0fc9b33B7D41B06Ee8ccD2Ef7C5020',
} as const;

export const MECH_MARKETPLACE_ABI = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_serviceRegistry',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_karma',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AlreadyInitialized',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'requestId',
        type: 'bytes32',
      },
    ],
    name: 'AlreadyRequested',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'provided',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'expected',
        type: 'uint256',
      },
    ],
    name: 'IncorrectSignatureLength',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'current',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'required',
        type: 'uint256',
      },
    ],
    name: 'InsufficientBalance',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'NoDepositAllowed',
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
        name: 'min',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'max',
        type: 'uint256',
      },
    ],
    name: 'OutOfBounds',
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
    name: 'ReentrancyGuard',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'requester',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: 'msgHash',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'signature',
        type: 'bytes',
      },
    ],
    name: 'SignatureNotValidated',
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
        name: 'amount',
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
        name: 'account',
        type: 'address',
      },
    ],
    name: 'UnauthorizedAccount',
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
        internalType: 'bytes32',
        name: 'paymentType',
        type: 'bytes32',
      },
    ],
    name: 'WrongPaymentType',
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
        internalType: 'address',
        name: 'mech',
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
        name: 'mechFactory',
        type: 'address',
      },
    ],
    name: 'CreateMech',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'mech',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'mechServiceMultisig',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'requestId',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'deliveryRate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'Deliver',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'ImplementationUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'deliveryMech',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address[]',
        name: 'requesters',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'numDeliveries',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32[]',
        name: 'requestIds',
        type: 'bytes32[]',
      },
      {
        indexed: false,
        internalType: 'bool[]',
        name: 'deliveredRequests',
        type: 'bool[]',
      },
    ],
    name: 'MarketplaceDelivery',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'deliveryMech',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'requester',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'numDeliveries',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32[]',
        name: 'requestIds',
        type: 'bytes32[]',
      },
    ],
    name: 'MarketplaceDeliveryWithSignatures',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'fee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'minResponseTimeout',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'maxResponseTimeout',
        type: 'uint256',
      },
    ],
    name: 'MarketplaceParamsUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'priorityMech',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'requester',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'numRequests',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bytes32[]',
        name: 'requestIds',
        type: 'bytes32[]',
      },
    ],
    name: 'MarketplaceRequest',
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
        indexed: false,
        internalType: 'address[]',
        name: 'mechFactories',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'bool[]',
        name: 'statuses',
        type: 'bool[]',
      },
    ],
    name: 'SetMechFactoryStatuses',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'bytes32[]',
        name: 'paymentTypes',
        type: 'bytes32[]',
      },
      {
        indexed: false,
        internalType: 'address[]',
        name: 'balanceTrackers',
        type: 'address[]',
      },
    ],
    name: 'SetPaymentTypeBalanceTrackers',
    type: 'event',
  },
  {
    inputs: [],
    name: 'DOMAIN_SEPARATOR_TYPE_HASH',
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
    inputs: [],
    name: 'MAX_FEE_FACTOR',
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
    name: 'MECH_MARKETPLACE_PROXY',
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
    inputs: [],
    name: 'chainId',
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
        name: 'newImplementation',
        type: 'address',
      },
    ],
    name: 'changeImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'newFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'newMinResponseTimeout',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'newMaxResponseTimeout',
        type: 'uint256',
      },
    ],
    name: 'changeMarketplaceParams',
    outputs: [],
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
        name: 'mech',
        type: 'address',
      },
    ],
    name: 'checkMech',
    outputs: [
      {
        internalType: 'address',
        name: 'multisig',
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
        internalType: 'address',
        name: 'mechFactory',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'payload',
        type: 'bytes',
      },
    ],
    name: 'create',
    outputs: [
      {
        internalType: 'address',
        name: 'mech',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'requestIds',
        type: 'bytes32[]',
      },
      {
        internalType: 'uint256[]',
        name: 'deliveryRates',
        type: 'uint256[]',
      },
    ],
    name: 'deliverMarketplace',
    outputs: [
      {
        internalType: 'bool[]',
        name: 'deliveredRequests',
        type: 'bool[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'requester',
        type: 'address',
      },
      {
        components: [
          {
            internalType: 'bytes',
            name: 'requestData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'deliveryData',
            type: 'bytes',
          },
        ],
        internalType: 'struct DeliverWithSignature[]',
        name: 'deliverWithSignatures',
        type: 'tuple[]',
      },
      {
        internalType: 'uint256[]',
        name: 'deliveryRates',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'paymentData',
        type: 'bytes',
      },
    ],
    name: 'deliverMarketplaceWithSignatures',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'domainSeparator',
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
    inputs: [],
    name: 'fee',
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
    name: 'getDomainSeparator',
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
        name: 'mech',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'requester',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'deliveryRate',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'paymentType',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'nonce',
        type: 'uint256',
      },
    ],
    name: 'getRequestId',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'requestId',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'requestId',
        type: 'bytes32',
      },
    ],
    name: 'getRequestStatus',
    outputs: [
      {
        internalType: 'enum MechMarketplace.RequestStatus',
        name: 'status',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_fee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_minResponseTimeout',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_maxResponseTimeout',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'karma',
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
    name: 'mapAgentMechFactories',
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
    name: 'mapDeliveryCounts',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'mapMechDeliveryCounts',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'mapMechFactories',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'mapMechServiceDeliveryCounts',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'mapNonces',
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
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'mapPaymentTypeBalanceTrackers',
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
    name: 'mapRequestCounts',
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
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    name: 'mapRequestIdInfos',
    outputs: [
      {
        internalType: 'address',
        name: 'priorityMech',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'deliveryMech',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'requester',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'responseTimeout',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'deliveryRate',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'paymentType',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxResponseTimeout',
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
    name: 'minResponseTimeout',
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
    name: 'numMechs',
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
    name: 'numTotalRequests',
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
    name: 'numUndeliveredRequests',
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
        internalType: 'bytes',
        name: 'requestData',
        type: 'bytes',
      },
      {
        internalType: 'uint256',
        name: 'maxDeliveryRate',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'paymentType',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'priorityMech',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'responseTimeout',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'paymentData',
        type: 'bytes',
      },
    ],
    name: 'request',
    outputs: [
      {
        internalType: 'bytes32',
        name: 'requestId',
        type: 'bytes32',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes[]',
        name: 'requestDatas',
        type: 'bytes[]',
      },
      {
        internalType: 'uint256',
        name: 'maxDeliveryRate',
        type: 'uint256',
      },
      {
        internalType: 'bytes32',
        name: 'paymentType',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'priorityMech',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'responseTimeout',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'paymentData',
        type: 'bytes',
      },
    ],
    name: 'requestBatch',
    outputs: [
      {
        internalType: 'bytes32[]',
        name: 'requestIds',
        type: 'bytes32[]',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'serviceRegistry',
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
        internalType: 'address[]',
        name: 'mechFactories',
        type: 'address[]',
      },
      {
        internalType: 'bool[]',
        name: 'statuses',
        type: 'bool[]',
      },
    ],
    name: 'setMechFactoryStatuses',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32[]',
        name: 'paymentTypes',
        type: 'bytes32[]',
      },
      {
        internalType: 'address[]',
        name: 'balanceTrackers',
        type: 'address[]',
      },
    ],
    name: 'setPaymentTypeBalanceTrackers',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const;
