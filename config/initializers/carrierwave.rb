CarrierWave.configure do |config|
  if !Rails.env.test?
    config.fog_provider = 'fog/aws'
    config.fog_credentials = {
      provider: "AWS",
      aws_access_key_id: ENV["AKIAI2DQYJ2BLIEQRZ4A"],
      aws_secret_access_key: ENV["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"]
    }
    config.fog_directory  = ENV["S3_BUCKET"]
  end
end
