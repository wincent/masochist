from os.path import join, realpath
from json import load

common = realpath( join( __file__, '..', '..', 'masochist', 'shared', 'common.json' ) )

with open( common ) as f:
    data = load( f )
    markdown_prefix = data.get( 'redisKeyPrefix' )
    markdown_cache_breaker = data.get( 'redisCacheVersion' )

def FlagsForFile( filename, **kwargs ):
    return None
