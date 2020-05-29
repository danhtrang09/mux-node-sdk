import { InputSettings } from './InputSettings';
import { PlaybackIdPolicy } from './PlaybackIdPolicy';
import { AssetMp4Support } from './AssetMp4Support';
import { AssetMasterAccess } from './AssetMasterAccess';

export interface CreateAssetParams {
  input: string | InputSettings[];
  playback_policy?: PlaybackIdPolicy | (PlaybackIdPolicy)[];
  passthrough?: string;
  mp4_support?: AssetMp4Support;
  normalize_audio?: boolean;
  test?: boolean;
  master_access?: AssetMasterAccess;
}
